import { source } from '@/lib/source';
import { flexsearchFromSource } from 'xyzdocs-core/search/flexsearch';

export const { GET } = flexsearchFromSource(source);