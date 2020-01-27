*Notes*

When to use Arrays:
    When you need order
    When you need fast access/insertion and removal(sort of...)

Big O of array
    Searching - O(n)
    Access -O(1)

Adding and removign from the beginning of an array is best to avoid if you can
.push and .pop and always faster than .shift and .unshift

.pop and .push are O(1). ,sort O(n * log N) All other array methods are O(n).

An Algorithm is a process or set of steps to accomplish a certain task

How do you imporve
    1. Devise as plan for solving problems
    2. Master common problem solving patterns

Problem Solving:
    Under the problem
    Explore Concrete examples
    break it down
    Solve/Simplify
    Look Back and refactor

1. Can I restate the problem in my own words
2. What are the inputs that go into the problem
3. What are the outputs that should come fromt he solution of this problem.
4. Can the outputs be detrmined from the inputs. In other words, do i have enough information to solve the problem.
5. How should I label the important peices of data that are a part of the problem.

**Exdplore Example
    * Start with Simple Examples
    * Progress to more complex examples
    * Explore examples with empty inputs
    * Explore examples with invaliud inputs

function charCount(str){
  var res = {};
  for(var i = 0; i < str.length; i++){
    //console.log(res[str[i]])
    if(res[str[i]] > 0){
      res[str[i]]++
       console.log(res)
    }
    else {
      console.log('else', str[i])
      res[str[i]] = 1
    }
  }
return res;
}

charCount("hello")

patterns to writing code
    *Frequency Counter
    *Multiple Pointers
    *Sliding Window
    *Divide and Conquer
    *Dynamic Programming
    *Greedy Algorithms
    *Backtracking# ds_algo
