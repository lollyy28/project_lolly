import { Button } from "react-bootstrap"
import MyButton from "./assets/components/ui/Button"
import StateCounter from "./assets/components/ui/StateCounter"

//parent component
function BasicCompoment() {
    return <>
        <MyButton>
            Test
        </MyButton>
        <MyButton>
            Ini button ku, mana button mu
        </MyButton>
        <MyButton>
            Simpan
        </MyButton>

        <Button variant="warning">Test Component Lagi</Button>

        <StateCounter/>
    </>
}

export default BasicCompoment