function LRUCache(strArr) { 

	const CACHE_SIZE = 5;
  
	const queue = [];
  
	for(let i = 0; i < strArr.length; i++)
	{
	  const cacheItem = strArr[i];
	  
	  // if requested but not in cache, add it now
	  if(!queue.includes(cacheItem))
	  {
		// max cache size needs check
		if(queue.length === CACHE_SIZE)
		  queue.shift();
  
		queue.push(cacheItem);
	  }
	  else
	  {
		let currentIndex = queue.indexOf(cacheItem);
		
		// requested but not "top", add it back to the top of the queue
		if(currentIndex !== queue.length - 1)
		{
		  const removedFrame = queue.splice(currentIndex, 1)[0];
  
		  queue.push(removedFrame);
		}
  
		// requested and top, do nothing :)
	  }
	}
  
	return queue.join("-"); 
  }
	 
  // keep this function call here 
  console.log(LRUCache(readline()));