<template>
  <div class="template">
    <div class="container">
      <TheEpigraph id="creating_courses" :show-icon="false" text="РАЗРАБОТКА МАССОВЫХ ОТКРЫТЫХ ОНЛАЙН-КУРСОВ МООК" />
      <section class="two-col">

        <div
            v-for="(row, index) in rows"
            :key="index"
            class="row"
            :class="{ reverse: index % 2 === 1 }"
        >
          <!-- Левая колонка -->
          <div class="col left-col">
            <div class="text-box">
              <div class="title">{{ row.title }}</div>
              <span class="diamond-header"></span>

              <div v-for="(block, i) in row.text" :key="i">
                <p v-if="block.type === 'p'">{{ block.content }}</p>
                <ul v-else-if="block.type === 'ul'">
                  <li v-for="(item, j) in block.items" :key="j">{{ item }}</li>
                </ul>
              </div>
            </div>

          </div>

          <!-- Центральная линия -->
          <div class="center-line">
            <div class="diamond"></div>
          </div>

          <!-- Правая колонка -->
          <div class="col right-col">
            <div class="image-box">
              <img :src="row.image" :alt="row.title" />
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup>
import { rows as rows } from "@/data/rows.js";



import { onMounted, nextTick, ref } from 'vue';
import TheEpigraph from "@/components/TheEpigraph.vue";

const rowsRef = ref([]);

onMounted(() => {
  nextTick(() => {
    document.querySelectorAll('.row').forEach(rowEl => {
      const textBox = rowEl.querySelector('.text-box');
      const title = textBox.querySelector('.title');
      if (rowEl.classList.contains('reverse')) {
        textBox.style.setProperty('--title-left', `${title.offsetWidth}px`);
      } else {
        textBox.style.setProperty('--title-right', `${title.offsetWidth}px`);
      }
    });
  });
});


</script>

<style scoped>
.template {
  width: 100%;
  background-image: url('@/assets/bg-timeline.jpg');
  background-repeat: no-repeat;
  background-position: center; /* центрирование картинки */
  background-size: cover;
  background-attachment: fixed; /* опционально — фиксированный фон при скролле */
}

.container {
  width: 100%;
  max-width: 1300px;
  margin: 0 auto;
  padding: 20px 20px;

}

.two-col {
  width: 100%;
  font-family: 'Nekst', sans-serif;
}
.row {
  display: flex;
  width: 100%;
  position: sticky;

}
.row.reverse {
  flex-direction: row-reverse;
}
.col {
  width: 50%;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
}

/* уменьшаем первый и последний ряд */
.row:first-child .col
{
  min-height: 86px; /* половина 345px */
}
.row:last-child .col{
  display: none;
}
.text-box {
  padding: 24px;
  width: 100%;
  position: relative;
  box-sizing: border-box;
  border-top: none; /* убираем стандартный border */
  font-size: 1.5rem;
}

.text-box::before {
  content: "";
  position: absolute;
  top: 0; /* оставляем вертикально как было */
  height: 1px;
  background: black;
}

/* обычный заголовок — линия до ромбика справа */
.row:not(.reverse) .text-box::before {
  right: 0;
  left: auto;
  width: calc(100% - (var(--title-right, 0px))); /* динамическая ширина до ромба */
}

/* обратный заголовок — линия до ромбика слева */
.row.reverse .text-box::before {
  right: auto;
  left: 0;
  width: calc(100% - (var(--title-left, 0px))); /* динамическая ширина до ромба */
}

/* Правый блок — текст и списки */
.row.reverse .text-box {
  text-align: right; /* текст блока справа */
}

/* Общие стили для всех списков */
.text-box ul {
  list-style: none; /* убираем стандартные маркеры */
  padding: 0;
  margin: 0;
  padding-top: 24px;
}

/* общий маркер — точка слева */
.text-box li {
  position: relative;
  padding-left: 1.2em; /* место под маркер */
}

.text-box li::before {
  content: "•";
  position: absolute;
  left: 0;
  color: black;
}

/* для reverse блоков маркер справа */
.row.reverse .text-box li {
  padding-left: 0;
  padding-right: 1.2em; /* место под маркер справа */
  text-align: right;
}

.row.reverse .text-box li::before {
  left: auto;
  right: 0;
}

/* заголовок с ромбиком */
.text-box .title {
  position: absolute;
  top: 0;
  transform: translateY(-50%);
  font-weight: bold;
  padding: 0 8px;
  display: flex;
  align-items: center;
  font-size: 1.8rem;
}

/* ромб у заголовка */
.text-box .title::before {
  content: "";
  display: inline-block;
  width: 12px;
  height: 12px;
  background: black;
  transform: rotate(45deg);
  margin: 0 6px;
  border: 2px solid #fff;
}

/* по умолчанию — заголовок слева, ромб справа */
.row:not(.reverse) .text-box .title {
  left: 16px;
  right: auto;
  flex-direction: row-reverse; /* ромб справа */
}

/* если row.reverse — заголовок справа, ромб слева */
.row.reverse .text-box .title {
  right: 16px;
  left: auto;
  flex-direction: row; /* ромб слева */
}
/* первый блок — убираем линию и ромб */
.row:first-child .text-box::before,
.row:first-child .text-box .title::before {
  display: none;
}

/* последний блок — убираем линию и ромб */
.row:last-child .text-box::before,
.row:last-child .text-box .title::before {
  display: none;
}


/* центральная линия таймлайна */
.center-line {
  position: absolute;
  left: 50%;
  top: 0;
  bottom: 0;
  width: 2px;
  background: black;
  transform: translateX(-50%);
}

/* ромб на линии таймлайна */
.diamond {
  position: absolute;
  top: -7px;
  left: 50%;
  width: 14px;
  height: 14px;
  background: black;
  transform: translate(-50%, 0) rotate(45deg);
}

.image-box {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  box-sizing: border-box;
  padding: 24px;
}

.image-box img {
  max-width: 200px;
  max-height: 200px;
  height: auto;
  object-fit: contain;
}

.center-line {
  position: absolute;
  left: 50%;
  top: 0;
  bottom: 0;
  width: 2px;
  background: black;
  transform: translateX(-50%);
}
.diamond {
  position: absolute;
  top: -7px;
  left: 50%;
  width: 14px;
  height: 14px;
  background: black;
  transform: translate(-50%, 0) rotate(45deg);
}




@media (max-width: 768px) {
  .row,
  .row.reverse {
    flex-direction: column;
    align-items: center;
    position: relative;
    /* Убираем margin-left отсюда */
  }

  .col,
  .left-col,
  .right-col {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    box-sizing: border-box;
  }

  .text-box {
    margin: 0;
    text-align: center;
    max-width: 90%;
    position: relative;
    padding: 0;
  }

  .text-box .title {
    flex-direction: row;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    position: static;
    transform: none;
    margin-bottom: 12px;



  }
  .text-box .title::before {
    display: none;
  }

  .text-box::before {
    display: none;
  }

  .text-box ul {
    text-align: left;
  }

  .text-box li {
    padding-left: 1.2em;
    text-align: left;
  }

  .text-box li::before {
    left: 0;
    right: auto;
  }

  .image-box {
    padding: 12px;
    justify-content: center;
  }

  .image-box img {
    max-width: 100px;
    max-height: 100px;
    height: auto;
    object-fit: contain;
  }

  .center-line {
    display: block;
    position: absolute;
    left: 24px; /* Отступ для линии */
    top: 0;
    bottom: 0;
    width: 2px;
    background: black;
    transform: translateX(-50%);
  }


  .row:first-child .diamond {
    display: none;
  }

  .row:last-child .col {
    display: flex;
  }
}










</style>
