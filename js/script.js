
tailwind.config = {
    theme: {
        extend: {
            colors: {
                brand: {
                    dark: '#000000',
                    card: '#121212',
                    light: '#1e1e1e',
                    orange: '#F47E20',
                    orangehover: '#D96B18',
                    whatsapp: '#25D366',
                    whatsapphover: '#1ebe57'
                }
            },
            fontFamily: {
                sans: ['Montserrat', 'sans-serif'],
                heading: ['Oswald', 'sans-serif'],
            }
        }
    }
}
    

// Set today's date as default & set min attribute to prevent picking past dates
const nowObj = new Date();
const todayStr = nowObj.toISOString().split('T')[0];
const dateInput = document.getElementById('bookingDate');

dateInput.value = todayStr;
dateInput.min = todayStr;

const PHONE_NUMBER = "5521972832618"; // WhatsApp do Seu Xico

// Prevent picking past dates & times dynamically
function filterTimeOptions() {
    const selectedDate = dateInput.value;
    const isToday = selectedDate === todayStr;
    const currentHour = nowObj.getHours();
    const currentMinute = nowObj.getMinutes();
    
    const timeSelect = document.getElementById('bookingTime');
    const options = timeSelect.options;
    let firstValid = false;

    for (let i = 0; i < options.length; i++) {
        const [hourStr, minStr] = options[i].value.split(':');
        const hourVal = parseInt(hourStr, 10);
        const minVal = parseInt(minStr, 10);
        
        let isPast = false;
        if (isToday) {
            if (hourVal < currentHour) {
                isPast = true;
            } else if (hourVal === currentHour && minVal <= currentMinute) {
                isPast = true;
            }
        }

        if (isPast) {
            options[i].disabled = true;
        } else {
            options[i].disabled = false;
            if (!firstValid && isToday) {
                options[i].selected = true;
                firstValid = true;
            }
        }
    }
}

function updateWhatsAppPreview() {
    // Guarantee selected date cannot be before today
    if (dateInput.value < todayStr) {
        dateInput.value = todayStr;
    }
    
    filterTimeOptions();

    const name = document.getElementById('userName').value.trim() || "Não informado";
    const service = document.getElementById('serviceSelect').value;
    const dateVal = dateInput.value;
    const time = document.getElementById('bookingTime').value;

    // Format date to DD/MM/YYYY
    let formattedDate = dateVal;
    if (dateVal) {
        const parts = dateVal.split('-');
        if (parts.length === 3) {
            formattedDate = `${parts[2]}/${parts[1]}/${parts[0]}`;
        }
    }

    // Usando Emojis diretos ao invés de unicode escapado para compatibilidade nativa em links
    const messageText = `Olá! Gostaria de agendar um horário na *Barbearia Seu Xico*.\n\n👤 *Nome:* ${name}\n💈 *Serviço:* ${service}\n📅 *Data:* ${formattedDate}\n⏰ *Horário:* ${time}\n\nAguardo confirmação!`;

    // Display preview text
    document.getElementById('messagePreview').innerText = messageText;

    // Generate encoded link
    const encodedMessage = encodeURIComponent(messageText);
    const fullUrl = `https://wa.me/${PHONE_NUMBER}?text=${encodedMessage}`;

    // Attach to button click
    document.getElementById('sendWhatsAppBtn').onclick = function() {
        window.open(fullUrl, '_blank');
    };
}

// Add Event Listeners for real-time reactivity
document.getElementById('userName').addEventListener('input', updateWhatsAppPreview);
document.getElementById('serviceSelect').addEventListener('change', updateWhatsAppPreview);
dateInput.addEventListener('change', updateWhatsAppPreview);
document.getElementById('bookingTime').addEventListener('change', updateWhatsAppPreview);

// Initial trigger on load
window.onload = function() {
    updateWhatsAppPreview();
};