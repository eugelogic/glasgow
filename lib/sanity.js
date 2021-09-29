import { config } from './config'
import {
    createClient,
    createPreviewSubscriptionHook,
    createImageUrlBuilder,
    createPortableTextComponent
} from 'next-sanity'

if (!config.projectId) {
    throw Error("No Project ID set. Check your environment variables.");
    }

export const sanityClient = createClient(config)
export const usePreviewSubscription = createPreviewSubscriptionHook(config)
export const urlFor = (source) => createImageUrlBuilder(config).image(source)
export const PortableText = createPortableTextComponent({
    ...config,
    serializers: {}
})

export const previewClient = createClient({
    ...config,
    useCdn: false,
    token: process.env.SANITY_API_TOKEN,
  })
  export const getClient = (usePreview) => (usePreview ? previewClient : sanityClient)
