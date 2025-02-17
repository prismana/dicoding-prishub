const backwardCount = number => {
    console.log(number)
    if(number > 1) backwardCount(number - 1)
}

backwardCount(5)