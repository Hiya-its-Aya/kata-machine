export default function bubble_sort(arr: number[]): void {
  for (let i: number = 0; i < arr.length; ++i){
    for (let j: number = 0; j < arr.length - 1 - i; ++j){
      if (arr[j] > arr[j+1]){
        const temp = arr[j]
        arr[j] = arr[j+1]
        arr[j+1] = temp;
      }
    }
  }
}