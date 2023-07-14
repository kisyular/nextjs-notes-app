import Prompt from '@models/prompt'
import { connectToDB } from '@utils/database'

export const GET = async (request) => {
	try {
		await connectToDB()

		const notes = await Prompt.find({}).populate('creator')

		return new Response(JSON.stringify(notes), { status: 200 })
	} catch (error) {
		return new Response('Failed to fetch all notes', { status: 500 })
	}
}
