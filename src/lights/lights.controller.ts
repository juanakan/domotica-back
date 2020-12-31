
import express, { Request, Response } from "express";
import * as LightsService from "./lights.service";
import { Light } from "./light.interface";


export async function getLights (req: Request, res: Response) {
    try {
      const lights: Light[] = await LightsService.findAll();
  
      res.status(200).send(lights);
    } catch (e) {
      res.status(404).send(e.message);
    }
  }
  
  // GET items/:id
  
  export async function getLight (req: Request, res: Response){
    const id: number = parseInt(req.params.id, 10);
  
    try {
      const light: Light = await LightsService.find(id);
  
      res.status(200).send(light);
    } catch (e) {
      res.status(404).send(e.message);
    }
  }
  
  // PUT items/
  
  export async function updateLight (req: Request, res: Response) {
    try {
      const light: Light = req.body.item;
  
      await LightsService.update(light);
  
      res.sendStatus(200);
    } catch (e) {
      res.status(500).send(e.message);
    }
  }