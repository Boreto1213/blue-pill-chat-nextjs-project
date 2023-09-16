import {z} from "zod";

export const messageValidator = z.object({
  id: z.string(),
  senderId: z.string(),
  recieverId: z.string(),
  text: z.string(),
  timestamo: z.number()
})

export const messageArrayValidator = z.array(messageValidator)

export type Message = z.infer<typeof messageValidator>