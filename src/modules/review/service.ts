import prisma from "../../prisma"
import {Prisma} from "@prisma/client"
import {Review, SearchParams} from "./model"


export const createReview = (data: Review) => {
  return prisma.review.create({data})
}

export const getReviews = (params: SearchParams) => {
  const {take = 10, skip = 0, author, rating, title} = params
  const where: Prisma.ReviewWhereInput = {}

  if (!!author && !!author.trim()) where.author = author
  if (!!rating) where.rating = +rating
  if (!!title && title.trim()) where.title = {contains: title}

  return prisma.review.findMany({take: +take, skip: +skip, where, orderBy: {createdAt: "asc"}})
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
