import styles, { layout } from "../style";
import Carousel from 'react-material-ui-carousel'
import { Paper, Button } from '@mui/material'

export default function Example(props)
{
    var items = [
        {
            name: "Personal Portfolio",
            description: "See how we can help you represent yourself",
            image: "https://source.unsplash.com/featured/?macbook"
        },
        {
            name: "Business Website",
            description: "Check out our business demo website",
            image: "https://source.unsplash.com/featured/?iphone"
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
        <section>
            <h2 className={styles.heading2}>This Could Be Your Future Website</h2>
            <Paper style={{height: 450}}>
                
                <img src={props.item.image} style={{height: '100%', width: '100%', position: 'absolute', zIndex: 0}} alt="" />
                <h2 style={{position: 'relative', zIndex: 1, textAlign: 'center', color:'#fff'}}>{props.item.name}</h2>
                <p style={{position: 'relative', zIndex: 1, textAlign: 'center', color:'#fff'}}>{props.item.description}</p>
                

                <Button className="CheckButton">
                    Check it out! {/*map link to website demos */}
                </Button>
            </Paper>
        </section>
            
    )
}
