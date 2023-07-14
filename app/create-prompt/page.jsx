'use client'

import { useState } from 'react'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'

import Form from '@components/Form'

const CreatePrompt = () => {
	const router = useRouter()
	const { data: session } = useSession()

	const [submitting, setIsSubmitting] = useState(false)
	const [note, setNote] = useState({ prompt: '', tag: '' })

	const createPrompt = async (e) => {
		e.preventDefault()
		setIsSubmitting(true)

		try {
			const response = await fetch('/api/prompt/new', {
				method: 'POST',
				body: JSON.stringify({
					prompt: note.prompt,
					userId: session?.user.id,
					tag: note.tag,
				}),
			})

			if (response.ok) {
				router.push('/')
			}
		} catch (error) {
			console.log(error)
		} finally {
			setIsSubmitting(false)
		}
	}

	return (
		<Form
			type='Create'
			post={note}
			setNotes={setNote}
			submitting={submitting}
			handleSubmit={createPrompt}
		/>
	)
}

export default CreatePrompt
