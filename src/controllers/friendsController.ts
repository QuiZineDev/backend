import { Request, Response } from "express"
import { linkWithSomeone,findSpecificAmisById,findAmisById } from "../models/Amis"
import { findUserById } from "../models/User"
import { didIAsked,createFriendRequest,deleteFriendRequest } from "../models/FriendRequest"
import { findUserById } from "../models/User"

export const askFriend = (req: Request, res: Response) => {
  const idValidator = Number(req.params.idValidator) as (number | null)
  const currentIdUser = req.user.id

  if (!idValidator) {
      return res.status(400).json({ error: "idValidator is required" })
    }
  if (findUserById(idValidator) == null) {
    return res.status(404).json({ error: "User not found" })
  }

  findSpecificAmisById(currentIdUser,idValidator).then((amis) => {
    if (!amis) {
        didIAsked(currentIdUser, idValidator).then((friendRequest) => {
          if (friendRequest && friendRequest.length > 0) {
            return res.status(400).json({ error: "You already asked this user" })
          } else {
            createFriendRequest(currentIdUser, idValidator).then((friendRequest) => {
              if (!friendRequest) {
                res.json({ message: `Friend request created` })
              }})
          }
        })
      } else {
        res.status(400).json({ error: "Already Amis" })
      }
    })
  res.json({ message: `Get friends of the current user` })
}

export const acceptFriend = (req: Request, res: Response) => {
  
  const idRequestor = Number(req.params.idRequestor) as (number | null)
  const currentIdUser = req.user.id

  if (!idRequestor) {
      return res.status(400).json({ error: "idRequestor is required" })
  }
  linkWithSomeone(currentIdUser, idRequestor).then((amis) => {
    deleteFriendRequest(currentIdUser, idRequestor).then((friendRequest) => {
      if (!friendRequest) {
        res.json({ message: `Friend request deleted, new friend acquired !` })
      }
    })
  })

}

export const refuseFriend = (req: Request, res: Response) => {
  deleteFriendRequest(req.user.id, Number(req.params.idRequestor)).then((friendRequest) => {
    if (!friendRequest) {
      res.json({ message: `Friend request deleted` })
    }
  })
}

export const getFriends = async (req: Request, res: Response) => {
  const currentIdUser = req.user.id
  const amis = await findAmisById(currentIdUser)
  if (!amis || amis.length === 0) {
    return res.status(404).json({ error: "No friends found" })
  }
  // Fetch all friends in parallel
  const friends = await Promise.all(
    amis.map(async (ami) => await findUserById(ami.id_validator))
  )
  res.json({ friends })
}