import styles, { layout } from "../style";
import Carousel from 'react-material-ui-carousel'
import { Paper, Button } from '@mui/material'
import { business, portfolioimg } from '../assets'

export default function Portfolio(props)
{
    var items = [
        {
            name: "Personal Portfolio",
            description: "See how we can help you represent yourself",
            image: "D:/Software Masters/software-masters/src/assets/business.jpg",
            button: "Portfolio"
        },
        {
            name: "Business Website",
            description: "Check out our business demo website",
            image: "D:/Software Masters/software-masters/src/assets/portfolioimg.jpg",
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
            <h2 className={styles.heading2}>This Could Be Your Future Website</h2>
            <Paper style={{height: 500, backgroundColor: "transparent"}}>
                
                <img src={props.item.image} style={{height: '88%', width: '100%', position: 'absolute', zIndex: 0, borderRadius: "10px"}} alt="" />
                <h2 style={{position: 'relative', zIndex: 1, textAlign: 'center', color:'#fff'}}>{props.item.name}</h2>
                <p style={{position: 'relative', zIndex: 1, textAlign: 'center', color:'#fff'}}>{props.item.description}</p>
                

                <Button style={{position: 'relative', top: '80%', left: '46%', zIndex: 1, textAlign: 'center', color:'#fff'}} className={`py-4 px-6 bg-blue-gradient font-poppins font-medium text-[18px] text-primary outline-none ${styles} rounded-[10px]`}>
                    {props.item.button}{/*map link to website demos */}
                </Button>
            </Paper>
        </section>
            
    )
}
