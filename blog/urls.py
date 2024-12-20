from . import views
from django.urls import path

urlpatterns = [
    path('', views.PostList.as_view(), name='home'),
    path('profile/', views.user_profile, name='user_profile'),
    path('<slug:slug>/', views.post_detail, name="post_detail"),
    path('<slug:slug>/edit_comment/<int:comment_id>',
        views.comment_edit, name='comment_edit'),
    path('<slug:slug>/delete_comment/<int:comment_id>',
        views.comment_delete, name='comment_delete'),
    path('<slug:slug>/like/', 
        views.post_like, name='post_like'),
    path('<slug:slug>/dislike/', 
        views.post_dislike, name='post_dislike'),
    path("tag/<slug:slug>/", views.tag_posts, name="tag_posts"),
]