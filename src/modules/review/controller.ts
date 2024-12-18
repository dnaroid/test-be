import express, {Request, Response} from "express"
import {createReview, deleteReview, getReviewById, getReviews, updateReview} from "./service"
import {validateReviewMiddleware} from "./middleware"
import {SearchParams} from "./model"

const router = express.Router()

router.post("/", validateReviewMiddleware, async (req: Request, res: Response) => {
  try {
    const review = await createReview(req.body)
    res.status(201).json(review)
  } catch (error) {
    res.status(500).json({error: "Failed to create review", details: error})
  }
})

router.get("/", async (req: Request, res: Response) => {
  const params: SearchParams = req.query

  try {
    const reviews = await getReviews(params)
    res.status(200).json(reviews)
  } catch (error) {
    res.status(500).json({error: "Failed to fetch reviews", details: error})
  }
})

router.get("/:id", async (req, res) => {
  const {id} = req.params

  try {
    const review = await getReviewById(+id)

    if (!review) {
      res.status(404).json({error: "Review not found"})
    } else {
      res.status(200).json(review)
    }
  } catch (error) {
    res.status(500).json({error: "Failed to fetch review", details: error})
  }
})

router.put("/:id", validateReviewMiddleware, async (req, res) => {
  const {id} = req.params

  try {
    const updatedReview = await updateReview(+id, req.body)
    res.status(200).json(updatedReview)
  } catch (error) {
    res.status(500).json({error: "Failed to update review", details: error})
  }
})

router.delete("/:id", async (req, res) => {
  const {id} = req.params

  try {
    await deleteReview(+id)
    res.status(204).send()
  } catch (error) {
    res.status(400).json({error: "Failed to delete review", details: error})
  }
})

export default router
