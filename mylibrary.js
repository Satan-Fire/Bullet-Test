function hasCollided(yobullet, yowall){

    bulletRightEdge=yobullet.x+yobullet.width
    wallLeftEdge=yowall.x
    if(bulletRightEdge>=wallLeftEdge){
      return true
    }
    else{
      return false
    }
  
  }