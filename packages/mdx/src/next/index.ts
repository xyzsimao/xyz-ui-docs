
const defaultPageExtensions = ['mdx', 'md', 'jsx', 'js', 'tsx', 'ts']
import { _Defaults, type Core, createCore } from '@/core'
import type { NextConfig } from 'next'
import type { IndexFilePluginOptions } from '@/plugins/index-file'
import { loadConfig } from '@/config/load-from-file'
import path from 'path'

export interface CreateMDXOptions {
  /**
   * Path to source configuration file
   */
  configPath?: string

  /**
   * Directory for output files
   *
   * @defaultValue '.source'
   */
  outDir?: string

  index?: IndexFilePluginOptions | false
}

function applyDefaults(options: CreateMDXOptions): Required<CreateMDXOptions> {
  return {
    index: {},
    outDir: options.outDir ?? _Defaults.outDir,
    configPath: options.configPath ?? _Defaults.configPath,
  }
}

export function createMDX(createOptions: CreateMDXOptions = {}) {
  return (nextConfig: NextConfig = {}): NextConfig => {
 
  const core = createNextCore(applyDefaults(createOptions))
   const isDev = process.env.NODE_ENV === 'development'

  if (process.env._XYZDOCS_MDX !== '1') {
    process.env._XYZDOCS_MDX = '1'
    console.log("createMDX init")
    void init(isDev, core)
  }

    return {
      ...nextConfig,

    }
  }
}


function createNextCore(options: Required<CreateMDXOptions>): Core {
  return createCore({
    environment: 'next',
    outDir: options.outDir,
    configPath: options.configPath,
    // plugins: [options.index && indexFile(options.index)],
  })
}

export async function postInstall(options: CreateMDXOptions) {
  const core = createNextCore(applyDefaults(options))
  console.log("core created")
  await core.init({
    config: loadConfig(core, true),
  })
  // await core.emit({ write: true })
}


async function init(dev: boolean, core: Core): Promise<void> {
  async function initOrReload() {
    await core.init({
      config: loadConfig(core, true),
    })
    await core.emit({ write: true })
  }

  async function devServer() {
    console.log("devServer start")
    const { FSWatcher } = await import('chokidar')
    const { configPath, outDir } = core.getOptions()
    const watcher = new FSWatcher({
      ignoreInitial: true,
      persistent: true,
      ignored: [outDir],
    })

    watcher.add(configPath)
    for (const collection of core.getCollections()) {
      watcher.add(collection.dir)
    }
    for (const workspace of core.getWorkspaces().values()) {
      for (const collection of workspace.getCollections()) {
        watcher.add(collection.dir)
      }
    }

    watcher.on('ready', () => {
      console.log('[MDX] started dev server')
    })

    const absoluteConfigPath = path.resolve(configPath)
    watcher.on('all', async (_event, file) => {
      if (path.resolve(file) === absoluteConfigPath) {
        // skip plugin listeners
        watcher.removeAllListeners()

        await watcher.close()
        await initOrReload()
        console.log('[MDX] restarting dev server')
        await devServer()
      }
    })

    process.on('exit', () => {
      if (watcher.closed) return

      console.log('[MDX] closing dev server')
      void watcher.close()
    })

    await core.initServer({ watcher })
  }

  await initOrReload()
  if (dev) {
    await devServer()
  }
}
