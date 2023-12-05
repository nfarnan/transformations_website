
import './faq-css.css'
export default function faqMain(){
    function onEvent(e){
        e.target.classList.toggle("active");
        var body = e.target.nextElementSibling;
        if (body.style.display === "block") {
            body.style.display = "none";
        } else {
            body.style.display = "block";
        }
    }
    return(
        <main>
        <section class="faq-container">
            <div class="faq-one">
                <h1 class="faq-page" onClick={(e) => onEvent(e)}>What are Zip Codes?</h1>
                <div class="faq-body">
                    <p>A system of code numbers assigned by the postal service to be used as part of the mailing address: each code designates a delivery area.</p>
                </div>
            </div>
            <hr class="hr-line"/>
            <div class="faq-two">
                <h1 class="faq-page" onClick={(e) => onEvent(e)}>What are Census Tracts?</h1>
                <div class="faq-body">
                    <p>A census tract is a geographic region defined for the purpose of taking a census. It is a small relatively permanent subdivions of a county.</p>
                </div>
            </div>
        </section>
    </main>
    )
}
    
