import express from 'express'
import { addKnowledge } from '../controllers/knowledge.controller.js'
import { authMiddleware } from '../middleware/auth.middleware.js'
import { isSubscribed } from '../middleware/isSubscribed.middleware.js'

const knowledgeRoutes = express.Router()

knowledgeRoutes.post("/add-knowledge",authMiddleware,isSubscribed,addKnowledge)

export default knowledgeRoutes