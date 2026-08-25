
import type { Core, CoreOptions, Plugin, PluginContext } from '@/core'
import { ServerOptions } from '@/runtime/server'
export interface IndexFilePluginOptions {
  target?: 'default' | 'vite'

  /**
   * add `.js` extensions to imports, needed for ESM without bundler resolution
   */
  addJsExtension?: boolean

  /**
   * Generate entry point for browser
   * @defaultValue true
   */
  browser?: boolean

  /**
   * Generate entry point for dynamic compilation
   * @defaultValue true
   */
  dynamic?: boolean
}

export interface IndexFilePlugin {
  ['index-file']?: {
    generateTypeConfig?: (this: PluginContext) => string | void
    serverOptions?: (this: PluginContext, options: ServerOptions) => void
  }
}