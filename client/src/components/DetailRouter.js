import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Header from '../components/Header';
import Footer from '../components/footer';
const styles = theme => ({
  card: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 16,
  },
  pos: {
    marginBottom: 12,
  },
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
});

class DetailRouter extends React.Component {
  state = {
    data: []
  }
  componentDidMount() {
    const id = this.props.match.params.myid
    fetch("http://localhost:8000/detailrouter/" + id)
      .then((res) => { return res.json() })
      .then((res) => {
        console.log(res)
        this.setState({ data: res.data })
      })


      .catch((error) => console.log(error))
  }


  render() {
    const { classes } = this.props;
    const bull = <span className={classes.bullet}>•</span>;

    return (
       <div><Header/>
      <div className="container">
        <div class="row">
        <div className="col-sm-6">
        <br/>
         
           
            <div >
              <img className="border border-secondary" src={"http://localhost:8000/" + this.state.data.photoname} width="500" height="500" />
              <div className={classes.root}>
                <ExpansionPanel>
                  <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography className={classes.heading}><h5>Description</h5> </Typography>
                  </ExpansionPanelSummary>
                  <ExpansionPanelDetails>
                    <Typography>
                      {this.state.data.Description}
                    </Typography>
                  </ExpansionPanelDetails>
                </ExpansionPanel>
              </div>
            </div>
            </div>
            <div className="col-sm-6">
            <br/> 
            <Card className={classes.card} className="border border-secondary">
      <CardContent>
      <Typography className={classes.title} color="textSecondary" gutterBottom>
      Email :{this.state.data.email}
      <br/>
        </Typography> 
        <br/>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
   Company Name :{this.state.data.CompanyName}
        </Typography> 
        <br/> 
        <Typography className={classes.title} color="textSecondary" gutterBottom>
   Product  Name :{this.state.data.productName}
        </Typography>
        <br/> 
        <Typography className={classes.title} color="textSecondary" gutterBottom>
   Catigories  Name :{this.state.data.typeselected}
        </Typography>
        <br/> 
        <Typography className={classes.title} color="textSecondary" gutterBottom>
 Min Order :{this.state.data.order}
        </Typography>
        <br/> 
        <Typography className={classes.title} color="textSecondary" gutterBottom>
 Price  :{this.state.data.price}
        </Typography>
        <br/> 
        <Button variant="contained" color="secondary" className={classes.button}>
        Chat With Supplier
      </Button>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
            </div>
</div>
          </div>
          <Footer/> 
          </div>

          );
  
  
  
  
  
      }
  
  
  
  }
DetailRouter.propTypes = {
            classes: PropTypes.object.isRequired,
        };
  export default withStyles(styles)(DetailRouter);