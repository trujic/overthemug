export default defineEventHandler(async () => {
  const token = process.env.INSTAGRAM_TOKEN

  // Fetch your media posts from Instagram Graph API
  const res = await fetch(
    `https://graph.instagram.com/me/media?fields=id,caption,media_type,media_url,thumbnail_url,permalink,timestamp&access_token=${token}`
  )

  const data = await res.json()

  // Optional: handle errors
  if (data.error) {
    console.error('Instagram API Error:', data.error)
    throw createError({ statusCode: 500, statusMessage: 'Instagram API Error' })
  }

  return data.data // returns an array of posts
})
