<template>
    <section class="skills-section">
        <div class="skills-list">
            <div v-for="category in skills" :key="category.label" class="skill-row">
                <div class="row-label">
                    <component :is="category.icon" :size="18" weight="regular" />
                    {{ category.label }}
                </div>
                <div class="tags">
                    <span v-for="skill in category.items" :key="skill" :class="`tag tag--${category.color}`">
                        {{ skill }}
                    </span>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import {
    PhCode,
    PhLayout,
    PhDesktop,
    PhDatabase,
    PhCloud,
    PhPenNib,
    PhKanban,
    PhFileText,
} from '@phosphor-icons/vue'

const skills = [
    {
        label: 'Langages',
        icon: PhCode,
        color: 'green',
        items: ['JavaScript', 'Java', 'Python'],
    },
    {
        label: 'Frontend',
        icon: PhLayout,
        color: 'blue',
        items: ['HTML', 'CSS/SASS', 'Vue.js'],
    },
    {
        label: 'Backend',
        icon: PhDesktop,
        color: 'purple',
        items: ['Node.js', 'Express.js', 'Prisma', 'ORM', 'Flask', 'Jinja'],
    },
    {
        label: 'Base de données',
        icon: PhDatabase,
        color: 'amber',
        items: ['MySQL', 'PostgreSQL'],
    },
    {
        label: 'DevOps',
        icon: PhCloud,
        color: 'teal',
        items: ['GitHub', 'Docker'],
    },
    {
        label: 'Design',
        icon: PhPenNib,
        color: 'pink',
        items: ['Figma', 'Canva', 'Illustrator', 'Photoshop'],
    },
    {
        label: 'Gestion de projet',
        icon: PhKanban,
        color: 'gray',
        items: ['Jira', 'Confluence'],
    },
    {
        label: 'Bureautique',
        icon: PhFileText,
        color: 'coral',
        items: ['Word', 'PowerPoint', 'Excel'],
    },
]
</script>

<style scoped lang="scss">
@use "../../assets/variables.scss" as v;

.skills-section {
    padding: 2rem 0;
}

.skills-list {
    display: flex;
    flex-direction: column;
}

.skill-row {
    display: grid;
    grid-template-columns: 160px 1fr;
    align-items: start;
    gap: 16px;
    padding: 14px 0;
    border-bottom: 1px solid rgba(0, 0, 0, 0.08);
}

.skill-row:last-child {
    border-bottom: none;
}

.row-label {
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 0.85rem;
    font-weight: 500;
    color: v.$neutral-900;
    padding-top: 3px;
}

.tags {
    display: flex;
    flex-wrap: wrap;
    gap: 6px;
}

.tag {
    font-size: 0.8rem;
    font-weight: 500;
    padding: 4px 12px;
    border-radius: 20px;
    border: 1px solid transparent;
}

/* Couleurs */
.tag--green {
    background: #EAF3DE;
    color: #27500A;
    border-color: #C0DD97;
}

.tag--blue {
    background: #E6F1FB;
    color: #0C447C;
    border-color: #B5D4F4;
}

.tag--purple {
    background: #EEEDFE;
    color: #3C3489;
    border-color: #CECBF6;
}

.tag--amber {
    background: #FAEEDA;
    color: #633806;
    border-color: #FAC775;
}

.tag--teal {
    background: #E1F5EE;
    color: #085041;
    border-color: #9FE1CB;
}

.tag--pink {
    background: #FBEAF0;
    color: #72243E;
    border-color: #F4C0D1;
}

.tag--gray {
    background: #F1EFE8;
    color: #444441;
    border-color: #D3D1C7;
}

.tag--coral {
    background: #FAECE7;
    color: #712B13;
    border-color: #F5C4B3;
}

/* Responsive */
@media (max-width: 600px) {
    .skill-row {
        grid-template-columns: 1fr;
        gap: 8px;
    }
}
</style>