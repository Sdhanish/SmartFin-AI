import arcjet, { tokenBucket } from "@arcjet/next"

const aj = arcjet({
  key:process.env.ARCJET_KEY,
  characteristics:["userId"], //tracking based on clerk userId
  rules:[
    tokenBucket({
      mode:"LIVE",
      refillRate:60,
      interval:60,
      capacity:60,
    }),
  ],
});

export default aj;
