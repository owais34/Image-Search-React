import React, { useState } from 'react'
import GridList from '@material-ui/core/GridList'
import GridListTile from '@material-ui/core/GridListTile'
import IconButton from '@material-ui/core/IconButton'
import ZoomIn from '@material-ui/icons/ZoomIn'
// import Dialog from '@material-ui/core/Dialog'
// import FlatButton from '@material-ui/core/'
import GridListTileBar from '@material-ui/core/GridListTileBar'
import {makeStyles} from '@material-ui/core/styles'
import { Dialog } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      overflow: 'hidden',
      backgroundColor: theme.palette.background.paper,
    },
    gridList: {
      width: 900,
      height: 750,
    },
    icon: {
      color: 'rgba(255, 255, 255, 0.54)',
    },
    bigImage:{
      border: '10px solid white'
    }
  }));

function ImageResults({images}) {
    let imageListContent;
    const classes=useStyles()
  const [state, setstate] = useState({open:false,currImg:''})

  const onOpenDialog=(url,ht,wd)=>{
    setstate({open:true,currImg:url})
  }
  const onCloseDialog=()=>{
    setstate({open:false,currImg:''})
  }
    if(images){
        imageListContent=(
            <div className={classes.root}>
      <GridList cellHeight={400} className={classes.gridList}>
        {images.map((img) => (
          <GridListTile key={img.id}>
            <img src={img.largeImageURL} alt={img.type} />
            <GridListTileBar
              title={img.tags}
              subtitle={<span>by: {img.user}</span>}
              actionIcon={
                <IconButton aria-label={`view full image`} className={classes.icon} 
                onClick={()=>onOpenDialog(img.largeImageURL)}>
                  <ZoomIn />
                </IconButton>
              }
            />
          </GridListTile>
        ))}
      </GridList>
    </div>
        )
    }
    else
    {
        imageListContent=null
    }
    return (
        <div>
            {imageListContent}
            <Dialog open={state.open} onClose={onCloseDialog} >
              <img src={state.currImg} alt="" 
              className={classes.bigImage} 
              />
            </Dialog>
        </div>
    )
}

export default ImageResults