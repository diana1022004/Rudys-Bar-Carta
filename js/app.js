/* =========================================
RUDY'S BAR APP - MOTOR SPA (NAVEGACIÓN & FILTRADO)
========================================= */

let currentFilter = 'clasicos'; 

document.addEventListener("DOMContentLoaded", function () {
    console.log("RUDYS APP OK");
    renderGallery();
});

/* 🔥 FUNCIÓN CRÍTICA: Activa el salto entre el Inicio y la Carta */
function navigateTo(viewId) {
    // Oculta todas las interfaces agregando la clase .hidden
    document.querySelectorAll('.view-section').forEach(view => {
        view.classList.add('hidden');
    });

    // Muestra la interfaz que necesitas activando su ID
    const activeView = document.getElementById(viewId);
    if (activeView) {
        activeView.classList.remove('hidden');
    }
    // Manda la pantalla arriba de forma suave
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

/* RENDERIZADO COMPLETO POR CATEGORÍA Y SUBCATEGORÍA */
function renderGallery() {
    const gallery = document.getElementById('gallery');
    if (!gallery) return;

    gallery.innerHTML = '';

    // Filtrar los productos por la categoría seleccionada
    const filteredItems = menu.filter(item => item.mainCategory === currentFilter);

    // Agrupación estructural por subcategorías (Ej: RON, TEQUILA)
    const groupedItems = filteredItems.reduce((accumulator, item) => {
        const subCat = item.subCategory || "VARIOS";
        if (!accumulator[subCat]) {
            accumulator[subCat] = [];
        }
        accumulator[subCat].push(item);
        return accumulator;
    }, {});

    // Recorrer las subcategorías y pintar títulos + tarjetas
    Object.keys(groupedItems).forEach(subCategoryName => {

        // 1. Título Divisor Estilo Premium
        const subTitle = document.createElement('div');
        subTitle.className = 'subcategory-divider';
        subTitle.innerHTML = `
            <span></span>
            <h2>${subCategoryName}</h2>
            <span></span>
        `;
        gallery.appendChild(subTitle);

        // 2. Tarjetas de Producto Estilo Dublin Premium
        groupedItems[subCategoryName].forEach(item => {
            const card = document.createElement('div');
            card.className = 'menu-item-card'; 

            card.innerHTML = `
                <div class="card-main-header">
                    <h3 class="item-title">${item.name}</h3>
                    <span class="item-price-tag">COP $${item.price.toLocaleString('es-CO')}</span>
                </div>
                ${item.description ? `<p class="item-description-text">${item.description}</p>` : ''}
                ${item.ingredients ? `<p class="item-ingredients-text">${item.ingredients}</p>` : ''}
            `;
            gallery.appendChild(card);
        });
    });
}

/* CONTROLADOR DE PÍLDORAS (TABS) */
function filterCategory(category, event) {
    currentFilter = category;

    // Romper estado activo de las píldoras viejas
    document.querySelectorAll('.tab-pill').forEach(btn => {
        btn.classList.remove('active');
    });

    // Encender la píldora actual
    if (event && event.target) {
        event.target.classList.add('active');
    }

    renderGallery();
}