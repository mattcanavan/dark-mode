import useLocalStorage from './useLocalStorage';


const useDarkMode = (initalValue) => {
    const [value, setValue] = useLocalStorage("darkmode", initalValue)

    return [value, setValue]
}

export default useDarkMode;