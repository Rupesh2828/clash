import express,{Application, Request, Response} from "express"
import "dotenv/config"
import ejs from "ejs"

const app: Application = express()
const PORT = process.env.PORT || 7000

//gives path of the current directory
import path from "path"
import {fileURLToPath} from "url"
import { sendMail } from "./config/mailer.js"
const __dirname = path.dirname(fileURLToPath(import.meta.url))



app.use(express.json())
app.use(express.urlencoded({extended: false}))

//setting up the view engine
app.set("view engine", "ejs")
app.set("views", path.resolve(__dirname, "./views"))


app.get("/", async(req: Request,res: Response) => {
    const html = await ejs.renderFile(__dirname + `/views/emails/welcome.ejs`, {
        name:"Rupesh Jadhav"
    })
    await sendMail("viwowow376@cironex.com", "Testing mails smtp", html)
    return res.json({msg:"Email sent sucessfully..."})
    
})

app.listen(PORT, ()=> console.log(`Server is running on PORT ${PORT}`));


