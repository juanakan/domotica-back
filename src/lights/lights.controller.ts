
import express, { Request, Response } from "express";
import * as LightsService from "./lights.service";
import { Light } from "./light.interface";


export async function getLights (req: Request, res: Response) {
    
    LightsService
        .findAll()
        .then(lights => {
            res.status(200).send(lights);
        })
        .catch(err => {
            res.status(err.status).send(err.message);
        })
  }
  
  // GET items/:id
  
export async function getLight (req: Request, res: Response){
    const id: number = parseInt(req.params.id, 10);

    LightsService
        .find(id)
        .then(light => {
            res.status(200).send(light);
        })
        .catch(err => {
            res.status(err.status).send(err.message);
        })
}
  
  // PUT items/
  
export async function updateLight (req: Request, res: Response) {
    LightsService.update(req.body.light)
    .then(light => {
        res.status(200).send(light)        
    })
    .catch(err =>{
        res.status(err.status).send(err.message)
    })
}