/**
 * Data Model Interfaces
 */
import { Light } from "./interfaces/light.interface";

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
    return lights.slice();
  };
  
  export const find = async (id: number): Promise<Light> => {
    const record: Light = lights[id];
  
    if (record) {
      return {...record};
    }
  
    throw new Error("No record found");
  };

  export const update = async (updatedLight: Light): Promise<void> => {
    if (lights[updatedLight.id]) {
        let newLigths = lights.slice();
        newLigths[updatedLight.id] = updatedLight;
        lights = newLigths;
        
      return;
    }
  
    throw new Error("No record found to update");
  };

