import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import styles, { layout } from '../style';
import { blue, grey } from '@mui/material/colors';
import SsidChartIcon from '@mui/icons-material/SsidChart';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import DvrIcon from '@mui/icons-material/Dvr';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import {admin, analytics, search, branding} from '../assets'

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 1 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} 
          onChange={handleChange} 
          aria-label="basic tabs example"
          sx={{
            '& .MuiTabs-indicator': { backgroundColor: blue[200] },
            '& .MuiTab-root': { color: grey[700] },
            '& .Mui-selected': { color: blue[200] },
          }} 
          centered
          id="Tabs_menu">
          <Tab icon={<SsidChartIcon />} label="Website Analytics" {...a11yProps(0)}/>
          <Tab icon={<SupervisorAccountIcon />} label="Admin Support" {...a11yProps(1)}/>
          <Tab icon={<DvrIcon />} label="SEO Management" {...a11yProps(2)}/>
          <Tab icon={<ShoppingCartIcon />} label="ECommerce" {...a11yProps(3)}/>
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <section id="features" className={layout.section}>
          <div className={`${layout.sectionImg} flex-col`}>
            <img style={{height: '100%', width: '90%', position: 'absolute', zIndex: 0, borderRadius: "10px"}} src={analytics} alt="" />
          </div>
          <div className={layout.sectionInfo}>
            <h2 className={styles.heading2}>Website Analytics</h2>
            <p className={`${styles.paragraph} max-w-[600px] mt-4`}>
              It is vital for a business to understand how their website is doing in drawing potential clientele,
              so our team will set up website analytics tools for you to use to truly understand your website. 
              We will also be happy to teach you how to use some of these websites so that after we have worked 
              with you, you can continue to benefit from learning about the parts of your site that draw your 
              customers the best.
            </p>
          </div>
        </section>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <section id="features" className={layout.section}>
            <div className={`${layout.sectionImg} flex-col`}>
              <img style={{height: '100%', width: '90%', position: 'absolute', zIndex: 0, borderRadius: "10px"}} src={admin} alt="" />
            </div>
            <div className={layout.sectionInfo}>
              <h2 className={styles.heading2}>Admin Support</h2>
              <p className={`${styles.paragraph} max-w-[600px] mt-4`}>
                We appreciate that choices change sometimes, so if you would like to continue working with our 
                team after we have published and deployed your website, we can offer admin services to provide 
                necessary changes to suit your business needs and preferences. These admin services range from 
                page additions and removal to content modifications. We will book a session with you to understand 
                and determine the best choices for your website and do what we can to ensure your satisfaction.
              </p>
            </div>
          </section>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <section id="features" className={layout.section}>
          <div className={`${layout.sectionImg} flex-col`}>
            <img style={{height: '100%', width: '90%', position: 'absolute', zIndex: 0, borderRadius: "10px"}} src={search} alt="" />
          </div>
          <div className={layout.sectionInfo}>
            <h2 className={styles.heading2}>SEO Management</h2>
            <p className={`${styles.paragraph} max-w-[600px] mt-4`}>
              Once you have built your webstie, that isn't the end. It is still important that when customers search
              for your services, yours is the first business that is found on a search engines results page. This is 
              the very basics of Search Engine Optimisation (SEO), but we will handle this and you can be sure that we
              will work hard to make sure that your page is there to be seen. We will use the latest and best industry
              recognised techniques to produce effect website pages
            </p>
          </div>
        </section>
      </TabPanel>
      <TabPanel value={value} index={3}>
        <section id="features" className={layout.section}>
          <div className={`${layout.sectionImg} flex-col`}>
            <img style={{height: '100%', width: '90%', position: 'absolute', zIndex: 0, borderRadius: "10px"}} src={branding} alt="" />
          </div>
          <div className={layout.sectionInfo}>
            <h2 className={styles.heading2}>ECommerce</h2>
            <p className={`${styles.paragraph} max-w-[600px] mt-4`}>
              ECommerce is a new method of selling products by using the internet as a way to sell products and reach a
              larger target audience from all parts of the world. We want to help you to find these potential customers
              and we will do this by helping you to create a storefront that will help boost your sales and reach. There
              are many options out there that are available and some of these can be confusing so we are happy to talk you
              through any possible choices and provide our own recommendations.
            </p>
          </div>
        </section>
      </TabPanel>
    </Box>
  );
}
