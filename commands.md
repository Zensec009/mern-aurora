**Here are the list of commands which i used to setup this template:**

## For Client Side:

```bash
npx create-next-app@latest
```

Now just follow the instruction for installing the dependencies as per your requirement.

## For Server Side:

>**Note:** Make sure to navigate to `server` directory / Folder. 

**Generating a `tsconfig.json` file:**

```sh
tsc --init
```

**Generating a `package.json` file:**

```sh
npm init -f 
```

**Installing ExpressJS, Mongoose, & ts-node:**

### ts-node
```sh
npm install --save "ts-node@latest"
```

### Express JS
```sh
npm install --save "expressJS@latest"
```

### Mongoose
```sh
npm install --save "mongoose@latest"
```

## CORS (For local development)
```sh
npm install --save-dev "cors@latest"
```

**Note:** 
> Difference between `--save-dev` dependecy and `--save` dependency is that Dev dependencies are only used for development purposes. Where as the `--save` dependencies are going to be used for all kinds of production dependencies.

Once Installed with everything go to `package.json` file and add the `dev` script. As we are going to use typescript we will need to use `ts-node` package for the execute the run layer.

```json
scripts: {
    "dev": "ts-node src/index.ts",
}

```

As you can see above, we are using ts-node to execute the `index.ts` file which is our entry point to server. So let us start by writing some part for server.

**server/src/index.ts:**
``` typescript
import express { Request, Response } from "express";

const app = express();
const PORT = 5000;
app.use("JSON");

app.get("/", (req: Request, res: Response) => {
    res.send("Hello From ExpressJS");
});

app.listen(PORT);

```
