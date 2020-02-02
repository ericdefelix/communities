<template>
  <div>
    <ul class="nav nav-tabs" role="tablist" aria-orientation="horizontal">
      <li class="nav-item">
        <a class="nav-link active" id="productCategoryAppTab" data-toggle="tab" href="#productCategoryApp" role="tab" aria-controls="productCategoryApp" aria-selected="true">Desktop</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" id="productCategoryAppTab" data-toggle="tab" href="#productCategoryApp" role="tab" aria-controls="productCategoryApp" aria-selected="true">Web</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" id="productCategoryAppTab" data-toggle="tab" href="#productCategoryApp" role="tab" aria-controls="productCategoryApp" aria-selected="true">iOS</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" id="productCategoryCompanionTab" data-toggle="tab" href="#productCategoryCompanion" role="tab" aria-controls="productCategoryCompanion" aria-selected="true">Android</a>
      </li>
    </ul>

    <div class="tab-content">
      <div class="tab-pane fade show active" id="productCategoryApp" role="tabpanel" aria-labelledby="productCategoryApp">
        <h5>The standard Lorem Ipsum passage, used since the 1500s</h5>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>

        <h5>Section 1.10.32 of "de Finibus Bonorum et Malorum", written by Cicero in 45 BC</h5>
        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?</p>
      </div>
      <div class="tab-pane fade" id="productCategoryCompanion" role="tabpanel" aria-labelledby="productCategoryCompanion"></div>
      <div class="tab-pane fade" id="productCategoryCompanion" role="tabpanel" aria-labelledby="productCategoryCompanion"></div>
      <div class="tab-pane fade" id="productCategoryCompanion" role="tabpanel" aria-labelledby="productCategoryCompanion"></div>
    </div>
  </div>

</template>

<script>
export default {
  name: 'articleTextPlaceholder'
}
</script>
