let arr = [1, 3, 2, 4, 5, 6];

async function doubleNumbersWithDelay(numbers) {
  const promises = numbers.map(async (number) => {
    await new Promise((resolve) => setTimeout(resolve, 500)); // Delay of 500 milliseconds
    return number * 2;
  });

  return await Promise.all(promises); // Wait for all promises to resolve
}

( async () => {
    let doubledArray = await doubleNumbersWithDelay(arr);
    console.log(doubledArray);
})();
