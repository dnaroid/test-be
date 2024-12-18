import {NextFunction, Request, Response} from "express"


export const validateReviewMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  const {title, rating} = req.body
  const errors = []

  if (!title || title.trim() === "") errors.push("`title` cannot be empty")
  if (!rating || +rating < 1 || +rating > 5) errors.push("`rating` must be between 1 and 5")

  if (errors.length > 0) {
    res.status(400).json({error: errors.join(", ")})
    next("validation error")
  } else {
    next()
  }
}
