<script>
    let courses = [{ id: Date.now(), name: '', grade: 0, credit: 0, type: 'Regular' }];
    let gpa = null;

    const courseTypes = {
        'Regular': 4.0,
        'Advanced': 5.0,
        'AP (without AP Exam)': 5.0,
        'AP (with AP Exam)/Dual Credit': 6.0
    };

    function addCourse() {
        courses = [...courses, { id: Date.now(), name: '', grade: 0, credit: 0, type: 'Regular' }];
    }

    function getQualityPoints(grade, type) {
        if (grade >= 90) return courseTypes[type];
        if (grade >= 80) return courseTypes[type] - 1.0;
        if (grade >= 75) return courseTypes[type] - 2.0;
        if (grade >= 70) return 2.0; // 2.0 for all types
        return 0; // 0 for all types below 70
    }

    function calculateGPA() {
        let totalQualityPoints = 0;
        let totalCredits = 0;

        courses.forEach(course => {
            const qualityPoints = getQualityPoints(course.grade, course.type);
            totalQualityPoints += qualityPoints * course.credit;
            totalCredits += course.credit;
        });

        gpa = totalCredits > 0 ? (totalQualityPoints / totalCredits).toFixed(3) : 'N/A';
    }
</script>

<style>
    table {
        width: 100%;
        border-collapse: collapse;
        margin-top: 1em;
        box-shadow: 0 2px 15px rgba(0, 0, 0, 0.1);
        border-radius: 8px;
        overflow: hidden;
    }
    th, td {
        border: 1px solid #ddd;
        padding: 8px;
        text-align: left;
    }
    th {
        background-color: #007BFF;
        color: white;
    }
    tr:nth-child(even) {
        background-color: #f2f2f2;
    }
    .button-group button {
        padding: 10px;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        margin-right: 5px;
        font-size: 16px;
    }
    .button-group button:nth-child(1) {
        background-color: #28a745;
        color: white;
    }
    .button-group button:nth-child(2) {
        background-color: #007bff;
        color: white;
    }
    .gpa-result {
        margin-top: 20px;
        font-weight: bold;
        font-size: 20px;
        color: #333;
    }
</style>

<h2>GPA Calculator</h2>
<table>
    <thead>
        <tr>
            <th>Course Name</th>
            <th>Grade</th>
            <th>Type</th>
            <th>Credits</th>
            <th>Total Quality</th>
        </tr>
    </thead>
    <tbody>
        {#each courses as course, i (course.id)}
        <tr>
            <td><input type="text" bind:value={course.name} placeholder="Course Name"></td>
            <td><input type="number" bind:value={course.grade} min="0" max="100" placeholder="Grade"></td>
            <td>
                <select bind:value={course.type}>
                    {#each Object.keys(courseTypes) as type}
                        <option value={type}>{type}</option>
                    {/each}
                </select>
            </td>
            <td><input type="number" bind:value={course.credit} min="0" step="0.5" placeholder="Credits"></td>
            <td>{(getQualityPoints(course.grade, course.type) * course.credit).toFixed(2)}</td>
        </tr>
        {/each}
    </tbody>
    <tfoot>
        <tr>
            <td colspan="4" style="text-align: right;">GPA:</td>
            <td>{gpa}</td>
        </tr>
    </tfoot>
</table>

<div class="button-group">
    <button on:click={addCourse}>Add Course</button>
    <button on:click={calculateGPA}>Calculate GPA</button>
</div>

{#if gpa !== null}
    <div class="gpa-result">Your GPA is: {gpa}</div>
{/if}
