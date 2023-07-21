<template>
    <div class="sidebar mt-4">
        <ul class="sidebar__nav">
            <li>Dashboard</li>
            <li>Transactions</li>
            <li class="active">Schedules</li>
            <li>Users</li>
            <li>Settings</li>
        </ul>
        <footer class="sidebar__footer">
            <ul>
                <li>Help</li>
                <li>Contacts</li>
            </ul>
        </footer>
    </div>
</template>

<script>
export default {
    name: 'SideBar'
}
</script>

<style>
    .sidebar {
        display: flex;
        flex-direction: column;
        align-items: center;
        max-height: 800px;
    }
    .sidebar .sidebar__nav {
        margin: 30% 0;
        list-style: none;
    }
    .sidebar .sidebar__nav li {
        margin: 15% 0;
    }
    .sidebar .sidebar__footer {
        margin: 80% 0;
    }
    .sidebar .sidebar__footer ul {
        list-style: none;
    }
    .sidebar .sidebar__footer li {
        margin: 10% 0;
    }
</style>