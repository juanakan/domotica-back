/**
 * Required External Modules and Interfaces
 */

import express, { Request, Response } from "express";
import * as LightsController from './lights.controller';

/**
 * Router Definition
 */

export const lightsRouter = express.Router();

/**
 * Controller Definitions
 */
lightsRouter.get("/", LightsController.getLights);
  
  // GET items/:id
  
lightsRouter.get("/:id", LightsController.getLight);
  
  // PUT items/
  
lightsRouter.put("/", LightsController.updateLight);
  