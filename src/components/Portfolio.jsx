import styles, { layout } from "../style";
import Carousel from 'react-material-ui-carousel'
import { Paper, Button } from '@mui/material'
import { business, portfolioimg } from '../assets'

export default function Portfolio(props)
{
    var items = [
        {
            name: "Personal Portfolio",
            description: "Websites designed to help you showcase yourself",
            image: business,
            button: "Portfolio"
        },
        {
            name: "Business Website",
            description: "Websites that really show off your business",
            image: portfolioimg,
            button: "Business"
        }
    ]

    return (
        <Carousel>
            {
                items.map( (item, i) => <Item key={i} item={item} /> )
            }
        </Carousel>
    )
}

function Item(props)
{
    return (
        <section style={{backgroundColor: "transparent"}}>
            <h2 className={`flex justify-center ${styles.heading2}`}>Website Inspiration</h2>
            <p style={{position: 'relative', zIndex: 1, textAlign: 'center', color:'#fff', paddingBottom: '20px'}}>If you would like to know what a website designed by the Software Masters would look like, check out either of the two images below:</p>
            <Paper style={{height: 500, backgroundColor: "transparent"}}>
                
                <img style={{height: '86%', width: '100%', position: 'absolute', zIndex: 0, borderRadius: "10px"}} src={props.item.image} alt="" />
                <h2 style={{position: 'relative', zIndex: 1, textAlign: 'center', color:'#fff', top:'45%'}}>{props.item.name}</h2>
                <p style={{position: 'relative', zIndex: 1, textAlign: 'center', color:'#fff', top:'45%'}}>{props.item.description}</p>
                

                <Button style={{position: 'relative', top: '80%', left: '46%', zIndex: 1, textAlign: 'center', color:'#fff'}} className={`py-4 px-6 bg-blue-gradient font-poppins font-medium text-[18px] text-primary outline-none ${styles} rounded-[10px]`}>
                    {props.item.button}{/*map link to website demos */}
                </Button>
            </Paper>
        </section>
            
    )
}
