function minCost(cost){
    let max = 100;
    let arr = [];
    if(cost.length > 100 || cost.length < 1)
        return 'max of 100 houses';
      for(let i = 0; i < cost.length; i+=1){
        for(let j =0; j < cost[i].length; j+=1){
          if(cost[i][j] < 1 || cost[i][j] > 99)
                return 'cost of each houses will be between $1 and $100';
          if(cost[i][j] < max && arr[i-1] !== cost[i][j]){
             arr[i] = cost[i][j];
              max = cost[i][j];                    
         }
       }
          max = 100;
      }
      const reduced = arr.reduce((total,number) => total + number);
       return `minimum cost for all houses is equal to $${reduced}`;
  }
  console.log(minCost([[1, 2, 3], [2, 2, 3], [3, 3, 1]]));