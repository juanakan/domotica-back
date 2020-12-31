
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
    LightsService.update(req.body.light)
    .then(response => {
        res.status(200).send(response)        
    })
    .catch(response =>{
        res.status(response.status).send(response.message)
    })
}