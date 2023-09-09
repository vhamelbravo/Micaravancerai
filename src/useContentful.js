import { createClient } from "contentful"

const useContentful = () => {
	const client = createClient({
		space: "g7bp9fvhi701",
	        accessToken: "Zhf24mw-FrfhhQ0rdQ4SK3sg2wO12FWDuqIDFjXr7AI",
	        host:"preview.contentful.com"
	})

	const getAuthors = async () => {
		try {
			const entries = await client.getEntries({
				content_type: "productos",
			        select: "fields"

			})

			return entries
		} catch (error) {
		console.log(`Error found: ${error}`)
		}
	}
	return {getAuthors, client}
  }

export default useContentful
