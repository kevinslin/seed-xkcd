---
id: xkcd.ineffective-sorts
title: Ineffective Sorts
desc: ''
updated: '1616125521434'
created: '1363158000000'
sources:
  name: xkcd
  url: 'https://creativecommons.org/licenses/by-nc/2.5/'
  license: Creative Commons 2.5
---
![StackSort connects to StackOverflow, searches for 'sort a list', and downloads and runs code snippets until the list is sorted.](https://imgs.xkcd.com/comics/ineffective_sorts.png)

## Transcript
define HalfheartedMergeSort(list):
     if length(list) <2:
          return list
     pivot=int(length(list)
2)
     A=HalfheartedMergeSort(list[:pivot])
     B=HalfheartedMergeSort(list[pivot:])
     

 ummmmm
     Return[A,B] 

Here. Sorry.

define FastBoGoSort{list}:
     

 an optimized BoGoSort
     

 runs in 0(N logN)
     From N to 1 to log(length(list)):
          shuffle(list):
          If isSorted(list):
               Return list
     Return "Kernel Page Fault (error code: 2)"

Define JobInterviewQuicksort(list):
     Ok so you choosea pivot
     Then divide the list in half
     For each half:
           Check to see if it's sorted
                No, wait, it doesn't matter
           Compare each element to the pivot
                The bigger ones go in a new list
                The equal ones go into, uh
                The second list from before
           Hang on, let me name the lists
                This is list A
                The new one is list B
           Put the big ones into list B
           Now take the second list
                Call it list, uh, A2
           Which one was the pivot in?
           Scratch all that
           It just recursively calls itself
           Until both lists are empty
                Right?
           Not empty, but you know what I mean
     Am I allowed to use the standard libraries?  
     
Define PanicSort(list):
     if isSorted(list):
          Return list
     for N from 1 to 10000:
          pivot=random(0,length(list))
          list=list[pivot:]+list[:pivot]
          if isSorted(list):
               return list
     if isSorted(list):
          return list
     if isSorted(list):

 this can't be happening
          return list
     if isSorted(list):

 come on come on
          return list
     

 oh jeez
     

 I'm gonna be in so much trouble
     list = [ ]
     system ("shutdown -H +5")
     system ("rm -rf .
")
     system ("rm -rf ~
*")
     system ("rm -rf 
")
     system (rd 
s 
q C:\*") 

portability
     return [1, 2, 3, 4, 5]

{{Title text: StackSort connects to StackOverflow, searches for 'sort a list', and downloads and runs code snippets until the list is sorted.}}
