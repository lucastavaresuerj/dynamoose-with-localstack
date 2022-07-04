import * as dynamoose from "dynamoose";
import AWS from "aws-sdk"

AWS.config.update({ region:'us-east-1' });

if (process.env.ENV == 'test') {
  dynamoose.aws.ddb.local("http://localhost:4566");

} 

const productSchema = new dynamoose.Schema(
  {
    prod_id: {
      type: String,
      hashKey: true,
    },
    name: String,
  },
  {
    saveUnknown: true,
    timestamps: true,
  }
);

const Product = dynamoose.model("Products-test", productSchema);

const prod1 = new Product({
  prod_id: "3",
  name: "prod3",
}).save();
