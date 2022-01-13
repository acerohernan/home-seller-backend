import Model from "../models/house";
import { Request, Response } from "express";

export async function getAll(req: Request, res: Response): Promise<Response> {
  try {
    const houses = await Model.find();
    return res.json(houses);
  } catch (err: any) {
    return res.status(400).send(err.message);
  }
}

export async function getById(req: Request, res: Response): Promise<Response> {
  try {
    const { id } = req.params;
    const house = await Model.findById(id);
    return res.json(house);
  } catch (err: any) {
    return res.status(400).send(err.message);
  }
}

export async function createHouse(
  req: Request,
  res: Response
): Promise<Response> {
  try {
    const newHouse = await Model.create(req.body);
    return res.json({
      message: "Successfully added",
      newHouse,
    });
  } catch (err: any) {
    return res.status(400).send(err.message);
  }
}

export async function updateHouse(
  req: Request,
  res: Response
): Promise<Response> {
  try {
    const { id } = req.params;
    const newHouse = req.body;
    const updatedHouse = await Model.findByIdAndUpdate(
      id,
      { ...newHouse },
      { new: true }
    );
    return res.json({ message: "Successfully updated", updatedHouse });
  } catch (err: any) {
    return res.status(400).send(err.message);
  }
}

export async function deleteHouse(
  req: Request,
  res: Response
): Promise<Response> {
  try {
    const { id } = req.params;
    const deletedHouse = await Model.findByIdAndDelete(id);
    return res.json({ message: "Successfully deleted", deletedHouse });
  } catch (err: any) {
    return res.status(400).send(err.message);
  }
}
