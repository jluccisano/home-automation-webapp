import {schema} from 'normalizr';

const zoneSchema = new schema.Entity('zones');

export const Schemas = {
  ZONE: zoneSchema,
  ZONE_ARRAY: [zoneSchema]
};
