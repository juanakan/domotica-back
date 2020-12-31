/**
 * Data Model Interfaces
 */
import { response } from "express";
import { Light } from "./light.interface";

/**
 * In-Memory Store
 */

let lights: Light[] = [
    {
      id: 1,
      name: "Salon 1",
      state: {
          value: 0
      }
    },
    {
        id: 2,
        name: "Salon 2",
        state: {
            value: 50
        }
    },
    {
        id: 3,
        name: "Cocina 1",
        state: {
            value: 100
        }
    },
];

/**
 * Service Methods
 */

export const findAll = async (): Promise<Light[]> => {
  const findAll : Promise<Light[]> = new Promise((resolve, reject) => {  
      resolve(lights.slice());
  });

  return findAll;
};
  
export const find = async (id: number): Promise<Light> => {
  const find : Promise<Light> = new Promise((resolve, reject) => {  
    const record: Light = lights.find(light => light.id === id);

    if (record) {
      resolve({...record});
    }
    reject ({
      status: 404,
      message: "No record found"
    });    
  });

  return find;
};

export const update = async (updatedLight: Light): Promise<Light> => {
  const update : Promise<Light> = new Promise((resolve, reject) => {   
      find(updatedLight.id)
        .then(response => {
          const newLigths: Light[] = lights.slice();
          const indexLight = lights.findIndex(light => light.id === updatedLight.id);

          newLigths[indexLight] = updatedLight;
          lights = newLigths;
          resolve(updatedLight);
        })
        .catch(response => {
          reject ({
            status: response.status,
            message: response.message
          });
        });
    });

  return update;
};

