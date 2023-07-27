import { global } from "styled-jsx/css"


export default function ColorChange(props) {
    const color = {global}
    if (props.id === 1) {
        color.setProperty("--body-bg", "#fff" ) //
        color.setProperty("--container-bg", "#fff" ) //
        color.setProperty("--text-color", "#111827" ) //
        color.setProperty("--text-hv-color", "#111827" ) //
        color.setProperty("--btn-color", "#fff" ) //
        color.setProperty("--btn-hv-color", "#ffe599" ) // dark yellow
        color.setProperty("--btn-color-border", "#111827" ) //
    } else if (props.id > 1 && props.id <10) {
        color.setProperty("--body-bg", "#fff" ) //
        color.setProperty("--container-bg", "#FFF2CC" ) // yellow
        color.setProperty("--text-color", "#111827" ) //
        color.setProperty("--text-hv-color", "#111827" ) //
        color.setProperty("--btn-color", "#fff" ) //
        color.setProperty("--btn-hv-color", "#c27ba0" ) // lavender
        color.setProperty("--btn-color-border", "#111827" ) //
    } else if ( props.id > 10 && props.id < 100) {
        color.setProperty("--body-bg", "#FFF2CC" ) // yellow
        color.setProperty("--container-bg", "#ffe599" ) // dark yellow
        color.setProperty("--text-color", "#111827" ) //
        color.setProperty("--text-hv-color", "#111827" ) //
        color.setProperty("--btn-color", "#c27ba0" ) // blush
        color.setProperty("--btn-hv-color", "#b4a7d6" ) // lavender
        color.setProperty("--btn-color-border", "#c27ba0" ) // blush
    }
}