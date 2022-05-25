export default function helpmenu(i)
{
    document.getElementById("help"+(i+1)).addEventListener("click", () => {
        var elem = document.querySelectorAll(".helpmenu")[i];
        elem.classList.toggle("helpmenushow");
        if (!elem.classList.contains("helpmenushow")) {
         elem.classList.add("helpmenuhide");
        } else {
         elem.classList.remove("helpmenuhide");
        }
        var el = elem;
        var newone = elem.cloneNode(true);
        elem.parentNode.replaceChild(newone, elem);
       });
}


