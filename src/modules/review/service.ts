import prisma from "../../prisma"
import {Review, SearchParams} from "./model"


export const createReview = (data: Review) => {
  return prisma.review.create({data})
}

export const getReviews = (params: SearchParams) => {
  const {take = 10, skip = 0, author, rating} = params
  const where: { author?: string, rating?: number } = {}

  if (author) where.author = author
  if (rating) where.rating = +rating

  return prisma.review.findMany({take: +take, skip: +skip, where})
}

export const getReviewById = (id: number) => {
  return prisma.review.findUnique({where: {id}})
}

export const updateReview = (id: number, data: Review) => {
  return prisma.review.update({where: {id}, data})
}

export const deleteReview = (id: number) => {
  return prisma.review.delete({where: {id}})
}
