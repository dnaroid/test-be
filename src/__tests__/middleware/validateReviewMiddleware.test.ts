import {Request, Response} from "express"
import {jest} from "@jest/globals"
import {validateReviewMiddleware} from "../../modules/review/middleware"

describe("validateReviewMiddleware", () => {
  let req: Partial<Request>
  let res: Partial<Response>
  let next: jest.Mock

  beforeEach(() => {
    req = {} as Partial<Request>
    res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn().mockReturnThis(),
    } as Partial<Response>
    next = jest.fn() as jest.Mock
  })

  it("should return error if title is empty", () => {
    req.body = {title: "", rating: 5}

    validateReviewMiddleware(req as Request, res as Response, next)

    expect(res.status).toHaveBeenCalledWith(400)
    expect(res.json).toHaveBeenCalledWith({
      error: "`title` cannot be empty",
    })
    expect(next).toHaveBeenCalledWith("validation error")
  })

  it("should return error if rating is not between 1 and 5", () => {
    req.body = {title: "Great product", rating: 0}

    validateReviewMiddleware(req as Request, res as Response, next)

    expect(res.status).toHaveBeenCalledWith(400)
    expect(res.json).toHaveBeenCalledWith({
      error: "`rating` must be between 1 and 5",
    })
    expect(next).toHaveBeenCalledWith("validation error")
  })

  it("should return error if rating is missing", () => {
    req.body = {title: "Great product"}

    validateReviewMiddleware(req as Request, res as Response, next)

    expect(res.status).toHaveBeenCalledWith(400)
    expect(res.json).toHaveBeenCalledWith({
      error: "`rating` must be between 1 and 5",
    })
    expect(next).toHaveBeenCalledWith("validation error")
  })

  it("should call next if title and rating are valid", () => {
    req.body = {title: "Great product", rating: 5}

    validateReviewMiddleware(req as Request, res as Response, next)

    expect(next).toHaveBeenCalled()
  })

  it("should return error if both title and rating are invalid", () => {
    req.body = {title: "", rating: 0}

    validateReviewMiddleware(req as Request, res as Response, next)

    expect(res.status).toHaveBeenCalledWith(400)
    expect(res.json).toHaveBeenCalledWith({
      error: "`title` cannot be empty, `rating` must be between 1 and 5",
    })
    expect(next).toHaveBeenCalledWith("validation error")
  })
})
